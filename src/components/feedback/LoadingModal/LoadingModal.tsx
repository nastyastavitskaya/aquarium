import { useInitData } from 'src/hooks/useInitData'
import { type IModalProps, Modal } from 'src/components/feedback/Modal/Modal'
import { Skeleton } from 'src/components/feedback/Skeleton/Skeleton'
import { Result } from 'src/components/feedback/Result/Result'

export interface ILoadingModalProps<Data> extends Omit<IModalProps, 'children'> {
  fetchData: () => Promise<Data>
  children: (initData: Data) => React.ReactNode
}

export function LoadingModal<Data>(props: ILoadingModalProps<Data>) {
  const [isInitLoading, isInitError, initData] = useInitData(props.fetchData)
  // eslint-disable-next-line no-debugger

  return (
    <>
      <Modal {...props}>
        {isInitLoading && <Skeleton />}

        {isInitError && <Result status="error" title="Error Loading" />}

        {!isInitLoading && !isInitError && props.children(initData)}
      </Modal>
    </>
  )
}
