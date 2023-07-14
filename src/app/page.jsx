import { Filter } from '@/components/Filter'
import { TaskCreator } from '@/components/TaskCreator'
import { TaskList } from '@/components/TaskList'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col gap-3 max-w-[560px] min-w-[335px] w-full'>
      <TaskCreator></TaskCreator>
      <Filter></Filter>
      <TaskList></TaskList>
    </div>
  )
}