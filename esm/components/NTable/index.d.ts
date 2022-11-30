import { Table } from 'antd';
import React from 'react';
declare type TableProps = React.ComponentProps<typeof Table>;
interface backResult {
    data: any;
    total: number;
}
export interface NTableProps extends TableProps {
    listApi: (params?: any) => Promise<backResult>;
    othParams?: any;
    pageName?: string;
    sizeName?: string;
    initPage?: [number, number];
}
declare const _default: React.ForwardRefExoticComponent<Pick<NTableProps, "title" | "style" | "scroll" | "size" | "sticky" | "className" | "id" | "children" | "onChange" | "loading" | "prefixCls" | "footer" | "summary" | "getPopupContainer" | "columns" | "expandedRowKeys" | "defaultExpandedRowKeys" | "expandedRowRender" | "expandRowByClick" | "expandIcon" | "onExpand" | "onExpandedRowsChange" | "defaultExpandAllRows" | "indentSize" | "expandIconColumnIndex" | "expandedRowClassName" | "childrenColumnName" | "rowKey" | "tableLayout" | "expandable" | "rowClassName" | "showHeader" | "components" | "onRow" | "onHeaderRow" | "direction" | "sortDirections" | "showSorterTooltip" | "locale" | "listApi" | "othParams" | "pageName" | "sizeName" | "initPage" | "dropdownPrefixCls" | "dataSource" | "pagination" | "bordered" | "rowSelection"> & React.RefAttributes<unknown>>;
export default _default;
