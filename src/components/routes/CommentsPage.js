import React from 'react';

import { CommentsPagination } from '../';

function CommentsPage({ match }) {
  return <CommentsPagination page={match.params.page} />;
}

export default CommentsPage;
