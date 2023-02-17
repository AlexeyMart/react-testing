import { FC } from 'react';
import { Typography } from 'antd';
import { content } from '../../content';

interface Props {
  name?: string;
}

export const Greet: FC<Props> = ({ name }) => {
  const text = name ? `${content.Greet.text}, ${name}` : content.Greet.text;

  return <Typography.Title level={4}>{text}</Typography.Title>;
};
