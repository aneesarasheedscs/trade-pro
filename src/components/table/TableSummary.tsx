import { Table } from 'antd';
import { ColumnType } from 'antd/es/table';
import { map, meanBy, size, sumBy } from 'lodash';
import { numberFormatter } from '@/utils/numberFormatter';

function TableSummary({ data, columns, filteredData, selectable = false, expandable = false }: TTableSummary) {
  return (
    <Table.Summary.Row>
      {selectable ? <Table.Summary.Cell index={0} /> : null}
      {expandable ? <Table.Summary.Cell index={0} /> : null}

      {map(columns, (col: AntColumnType<any>, index: number) => {
        const dataIndex = col?.dataIndex as string;

        const dataToCalculate = size(filteredData) > 0 && size(filteredData) !== size(data) ? filteredData : data;

        const total = sumBy(dataToCalculate, (item) => item?.[dataIndex]);
        const average = meanBy(dataToCalculate, (item) => item?.[dataIndex]);

        return (
          <Table.Summary.Cell {...col} key={index + '' + dataIndex} index={selectable ? index + 1 : index}>
            <b>{col?.showTotal ? numberFormatter(total) : col?.showAverage ? numberFormatter(average) : null}</b>
          </Table.Summary.Cell>
        );
      })}
    </Table.Summary.Row>
  );
}

type TTableSummary = { data?: any[]; columns: any[]; filteredData: any[]; selectable?: boolean; expandable?: boolean };
type AntColumnType<T> = { showTotal?: boolean; showAverage?: boolean } & ColumnType<T>;

export default TableSummary;
