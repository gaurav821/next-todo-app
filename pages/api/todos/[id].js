import { gql } from 'graphql-request';
import { getSession } from 'next-auth/react';

import { hygraphClient } from '../../../lib/hygraph';

const UpdateTodoById = gql`
  mutation UpdateTodoById(
    $id: ID!
    $description: String
    $completed: Boolean
    $userId: ID!
    $dueDate: DateTime!
  ) {
    todo: updateTodo(
      where: { id: $id }
      data: {
        description: $description
        completed: $completed
        dueDate: $dueDate
        nextAuthUser: { connect: { id: $userId } }
      }
    ) {
      id
      description
      completed
      dueDate
    }
  }
`;

const DeleteTodoById = gql`
  mutation DeleteTodoById($id: ID!) {
    deleteTodo(where: { id: $id }) {
      id
    }
  }
`;

export default async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).send({
      error: 'Unauthorized',
    });
  }

  switch (req.method.toLowerCase()) {
    case 'patch': {
      const { id } = req.query;
      const { description, completed, dueDate } = req.body;

      const { todo } = await hygraphClient.request(UpdateTodoById, {
        id,
        description,
        completed,
        dueDate,
        userId: session.userId,
      });

      res.status(200).json(todo);
      break;
    }

    case 'delete': {
      const { id } = req.query;

      await hygraphClient.request(DeleteTodoById, {
        id,
      });

      res.status(204).send();
      break;
    }

    default: {
      res.status(405).send();
    }
  }
};
