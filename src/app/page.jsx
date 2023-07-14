'use client'

import { Filter } from '@/components/Filter'
import { TaskCreator } from '@/components/TaskCreator'
import { TaskList } from '@/components/TaskList'
import store from '@/store'
import { Provider } from 'react-redux'

export default function Home() {
  return (
    <Provider store={store}>
      <div className='flex flex-col gap-3 max-w-[560px] min-w-[335px] w-full'>
        <TaskCreator></TaskCreator>
        <Filter></Filter>
        <TaskList></TaskList>
      </div>
    </Provider>
  )
}