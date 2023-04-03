import {IDoc} from "../types/IUser";

export default () => {
  const useDocs = () => useState<IDoc[]>('user_docs')
  const setDocs = (data: IDoc[]) => {
    const docs = useDocs()
    docs.value = data
  }
  const clearDocs = () => {
    const docs = useDocs()
    docs.value = []
  }

  const fetchDocs = async () => {
    const {data: docs_data} = await useFetchAPI<IDoc[]>('user/docs')
    //@ts-ignore
    setDocs(docs_data)
  }

  return {
    useDocs,
    fetchDocs,
    setDocs,
    clearDocs
  }
}
