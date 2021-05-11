import React, { Component } from 'react'

type IListState = {
  data: Record<string, unknown>[]
  loading: boolean
  isCollectionVisible: boolean
  entity: Record<string, unknown> | null
}
export const listMixin = (ComposedComponent: any) =>
  class extends Component<any, IListState> {
    public instance = null
    public fetchAction = null
    public createAction = null
    public getDetailAction = null
    public updateAction = null
    public deleteAction = null

    public beforeFetch = null
    public afterFtech = null
    public searchText = ''
    public pagination = {
      showSizeChanger: true,
      onShowSizeChange: this.onShowSizeChange.bind(this),
      onChange: this.pageChange.bind(this),
      pageSizeOptions: ['10', '20', '30', '40', '50', '60', '100'],
      hideOnSinglePage: false,
      pageIndex: 1,
      pageSize: 20,
      total: 0,
    }
    constructor(props: any) {
      super(props)
      this.state = {
        data: [],
        loading: false,
        isCollectionVisible: false,
        entity: null,
      }
    }

    componentDidMount() {
      // @ts-ignore
      this.beforeFetch()
      this.getList()
      // @ts-ignore
      this.afterFtech()
    }

    searchAction(e: any) {
      const code = e.keyCode
      const { value } = e.target
      if (code === 13) {
        this.searchText = value
        this.pagination.pageIndex = 1
        this.pagination.pageSize = 20
        this.getList()
      }
    }

    // @ts-ignore
    onShowSizeChange(current, pageSize) {
      this.pagination.pageIndex = 1
      this.pagination.pageSize = pageSize
      this.getList()
    }

    // @ts-ignore
    pageChange(page) {
      this.pagination.pageIndex = page
      this.getList()
    }

    openCollection() {
      this.setState({
        isCollectionVisible: true,
      })
    }

    closeCollection() {
      this.setState({
        isCollectionVisible: false,
      })
    }

    // @ts-ignore
    collectionCallBack({ isVisible, isRefresh, values = '' }) {
      isVisible && this.openCollection()
      !isVisible && this.closeCollection()
      if (values) {
        if (!this.state.entity) {
          // 新建
          // @ts-ignore
          this.createAction(values).then(() => {
            this.pagination.pageIndex = 1
            this.getList()
          })
        } else {
          // 修改
          // @ts-ignore
          // eslint-disable-next-line no-underscore-dangle
          this.updateAction(this.state.entity._id, values).then(() => {
            this.pagination.pageIndex = 1
            this.getList()
          })
        }
      } else {
        this.pagination.pageIndex = 1
        isRefresh && this.getList()
      }
    }

    // @ts-ignore
    getInstance(instance) {
      if (instance) {
        this.instance = instance
        // @ts-ignore
        const {
          fetchAction = () => {},
          createAction = () => {},
          getDetailAction = () => {},
          updateAction = () => {},
          deleteAction = () => {},
          beforeFetch = () => {},
          afterFtech = () => {},
        } =
          // @ts-ignore
          this.instance.init()
        this.fetchAction = fetchAction
        this.createAction = createAction
        this.getDetailAction = getDetailAction
        this.updateAction = updateAction
        this.deleteAction = deleteAction
        this.beforeFetch = beforeFetch
        this.afterFtech = afterFtech
      }
    }

    getList() {
      this.setState({
        loading: true,
      })
      // @ts-ignore
      this.fetchAction({
        pi: this.pagination.pageIndex - 1,
        ps: this.pagination.pageSize,
        keyword: this.searchText,
      }).then((res: any) => {
        const { page, total, data } = res.data
        this.pagination.total = total
        this.pagination.pageIndex = page
        this.setState({
          loading: false,
          data,
        })
      })
    }

    editEntity(id: string) {
      // @ts-ignore
      this.getDetailAction(id).then(
        // @ts-ignore
        ({ data }) => {
          this.setState({
            entity: data,
            isCollectionVisible: true,
          })
        },
        // @ts-ignore
        err => {
          console.log(err)
        },
      )
    }

    deleteEntity(id: string) {
      // @ts-ignore
      this.deleteAction(id).then(
        () => {
          this.pagination.pageIndex = 1
          this.getList()
        },
        // @ts-ignore
        error => {
          console.log(error)
        },
      )
    }
    // @ts-ignore
    getRowKey(record, index) {
      // @ts-ignore
      // eslint-disable-next-line no-underscore-dangle
      return record.id || record._id || index
    }

    render() {
      const { loading, data, isCollectionVisible, entity } = this.state
      return (
        <ComposedComponent
          loading={loading}
          data={data}
          entity={entity}
          pagination={this.pagination}
          isCollectionVisible={isCollectionVisible}
          searchAction={this.searchAction.bind(this)}
          openCollection={this.openCollection.bind(this)}
          closeCollection={this.closeCollection.bind(this)}
          getRowKey={this.getRowKey.bind(this)}
          getList={this.getList.bind(this)}
          collectionCallBack={this.collectionCallBack.bind(this)}
          editEntity={this.editEntity.bind(this)}
          deleteEntity={this.deleteEntity.bind(this)}
          {...this.props}
          ref={this.getInstance.bind(this)}
        />
      )
    }
  }
