import { MANAGEMENT_AXES } from '@/utils/const'
import Image from 'next/image'

export const ManagementAxes = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {MANAGEMENT_AXES.map(({ id, title, content, src }) => (
        <div
          key={id}
          className="bg-blue-50 rounded-lg py-4 px-8 flex flex-col gap-4 justify-end shadow-md "
        >
          <Image src={src} alt="" width={110} height={110} />
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-bold">{title}</h4>
            <p className="text-base font-light text-gray-500 dark:text-gray-400">
              {content}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
