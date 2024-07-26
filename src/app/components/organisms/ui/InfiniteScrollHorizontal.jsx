import Image from 'next/image'
import propTypes from 'prop-types'
export const InfiniteScrollHorizontal = ({ items }) => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {items.map(({ logo, name }) => (
          <li key={logo}>
            <Image src={logo} alt={name} width={180} height={80} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {items.map(({ logo, name }) => (
          <li key={logo}>
            <Image src={logo} alt={name} width={180} height={80} />
          </li>
        ))}
      </ul>
    </div>
  )
}
InfiniteScrollHorizontal.propTypes = {
  items: propTypes.array,
}
