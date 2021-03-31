import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

interface Props {
  name: string,
  homepage: string,
  language: string,
  id: number
};

const ReposytoryBox: FC<Props> = ({ name, homepage, language, id }) => (
  <Card>
    <CardContent>
      <h5>{ name }</h5>
      <p>Lang: { language }</p>
      <p>id: { id } </p>
    </CardContent>
    <CardActions>
      <Link href={homepage}>Homepage</Link>
    </CardActions>
  </Card>
);

export default ReposytoryBox;