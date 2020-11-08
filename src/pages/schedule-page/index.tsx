import React from 'react';
import { Table } from 'antd';
import { Breakpoint } from 'antd/es/_util/responsiveObserve';
import { TablePaginationConfig } from 'antd/es/table';

const { Column } = Table;

// const groupList = new Array(4).fill(undefined).map((value, index) => `BS19-0${index + 1}`);

const data: {
  key: number;
  weekDay: string;
  info: string | JSX.Element;
}[] = [];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
type Info = { title: string; profName: string; classNumber?: number; lessonType: string };
const infoList: Info[] = [
  { title: 'Mathematical Analysis I', profName: 'Vladimir Ivanov', lessonType: 'Lecture', classNumber: 108 },
  { title: 'Introduction to Programming I', profName: 'Ivan Konukhov', lessonType: 'Lab' },
];
const InfoComponent = ({ title, profName, classNumber, lessonType }: Info) => (
  <div>
    <h4>{`${title}${lessonType ? ` - ${lessonType}` : ''}`}</h4>
    <span>{`${profName}`}</span>
    {classNumber && (
      <span style={{ float: 'right' }}>
        <strong>{`№ ${classNumber}`}</strong>
      </span>
    )}
  </div>
);
for (let i = new Date().getDay(); i < 100; i++) {
  data.push({
    key: i,
    weekDay: days[(i + 1) % days.length],
    info: InfoComponent(infoList[Math.floor(Math.random()) % infoList.length]),
  });
}
const columnResponsiveBreakpoints: Breakpoint[] = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const paginationConfig: TablePaginationConfig = {
  position: ['bottomCenter'],
  pageSize: 7,
  showSizeChanger: false,
  // eslint-disable-next-line react/display-name
  itemRender: (
    page: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    originalElement: React.ReactElement<HTMLElement>,
  ) => {
    switch (type) {
      case 'page':
        return (
          <span style={{ padding: 10 }}>
            {19 + Math.floor(page / 6)}-0{page % 6}
          </span>
        );
      default:
        return originalElement;
    }
  },
};

export function SchedulePage(): JSX.Element {
  return (
    <div>
      <Table dataSource={data} size="large" pagination={paginationConfig}>
        <Column responsive={columnResponsiveBreakpoints} width={100} dataIndex="weekDay" key="weekDay" />
        <Column responsive={columnResponsiveBreakpoints} width={400} dataIndex="info" key="info" />
      </Table>
    </div>
  );
}
