import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import {
  ContainerColection,
  ItemText,
  NumberTitle,
  Title,
  TitleItem,
  TitleList,
} from './FAQ.styled';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: (
      <TitleList>
        <NumberTitle>[ 1 ]</NumberTitle>
        <TitleItem>WHAT IS AN NFT COLLECTION?</TitleItem>
      </TitleList>
    ),
    children: (
      <ItemText>
        An NFT collection is a group of unique digital assets, each represented
        by a non-fungible token, typically created around a specific theme or
        style.
      </ItemText>
    ),
    showArrow: false,
  },
  {
    key: '2',
    label: (
      <TitleList>
        <NumberTitle>[ 2 ]</NumberTitle>
        <TitleItem>HOW DO I PURCHASE NFTS FROM A COLLECTION?</TitleItem>
      </TitleList>
    ),
    children: (
      <ItemText>
        To purchase nfts from a collection, you typically need to use
        cryptocurrency on a blockchain0based marketplace.
      </ItemText>
    ),
    showArrow: false,
  },
  {
    key: '3',
    label: (
      <TitleList>
        {' '}
        <NumberTitle>[ 3 ]</NumberTitle>
        <TitleItem>CAN I SELL OR TRADE NFTS FROM A COLLECTION?</TitleItem>
      </TitleList>
    ),
    children: (
      <ItemText>
        To purchase nfts from a collection, you typically need to use
        cryptocurrency on a blockchain0based marketplace.{' '}
      </ItemText>
    ),
    showArrow: false,
  },
  {
    key: '4',
    label: (
      <TitleList>
        {' '}
        <NumberTitle> [ 4 ] </NumberTitle>
        <TitleItem>WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?</TitleItem>
      </TitleList>
    ),
    children: (
      <ItemText>
        As an NFT owner, you can own, transfer, potentially access exclusive
        content, resell, but don't automatically get copyright or intellectual
        property rights.
      </ItemText>
    ),
    showArrow: false,
  },
];

const FAQ: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <ContainerColection>
      <Collapse
        accordion
        defaultActiveKey={['1']}
        bordered={false}
        onChange={onChange}
        items={items}
      />
    </ContainerColection>
    // <ContainerColection>
    //   <Title>FAQ</Title>
    //   <TitleList>
    //     <TitleItem>
    //       <NumberTitle>[ 1 ]</NumberTitle>WHAT IS AN NFT COLLECTION?
    //       <ItemText>
    //         An NFT collection is a group of unique digital assets, each
    //         represented by a non-fungible token, typically created around a
    //         specific theme or style.
    //       </ItemText>
    //     </TitleItem>
    //     <TitleItem>
    //       <NumberTitle>[ 2 ]</NumberTitle> HOW DO I PURCHASE NFTS FROM A
    //       COLLECTION?
    //       <ItemText>
    //         To purchase nfts from a collection, you typically need to use
    //         cryptocurrency on a blockchain0based marketplace.{' '}
    //       </ItemText>
    //     </TitleItem>
    //     <TitleItem>
    //       <NumberTitle>[ 3 ]</NumberTitle>
    //       CAN I SELL OR TRADE NFTS FROM A COLLECTION?
    //       <ItemText>
    //         To purchase nfts from a collection, you typically need to use
    //         cryptocurrency on a blockchain0based marketplace.{' '}
    //       </ItemText>
    //     </TitleItem>
    //     <TitleItem>
    //       <NumberTitle>[ 4 ]</NumberTitle>
    //       WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?
    //       <ItemText>
    //         As an NFT owner, you can own, transfer, potentially access exclusive
    //         content, resell, but don't automatically get copyright or
    //         intellectual property rights.
    //       </ItemText>
    //     </TitleItem>
    //   </TitleList>
    // </ContainerColection>
  );
};

export default FAQ;
