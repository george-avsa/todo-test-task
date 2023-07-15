'use client'

import { Filter } from '@/components/Filter'
import { TaskCreator } from '@/components/TaskCreator'
import { TaskList } from '@/components/TaskList'
import { ThemeToggler } from '@/components/ThemeToggler'
import store from '@/store'
import { useEffect, useRef } from 'react'
import { Provider, useSelector } from 'react-redux'

export default function Home() {

  return (
    <Provider store={store}>
      <div className='flex flex-col gap-3 max-w-[560px] min-w-[335px] w-full'>
        <TaskCreator></TaskCreator>
        <Filter></Filter>
        <TaskList></TaskList>
        <ThemeToggler></ThemeToggler>
      </div>
    </Provider>
  )
}