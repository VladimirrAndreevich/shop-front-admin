import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Item = styled.li``;

export const ItemLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  border: 2px solid black;
  border-radius: 5px;
`;

export const ChevronImage = styled(Image)`
  margin-right: 5px;
`;
