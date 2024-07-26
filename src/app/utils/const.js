// Initials values to Forms
export const initialValueFormLogin = {
  email: '',
  password: '',
}

export const initialValueFormRegister = {
  name: '',
  email: '',
  password: '',
}

export const initialValueFormPostulation = {
  names: '',
  lastnames: '',
  email: '',
  phone: '',
  message: '',
}

export const NAV_ITEMS = [
  {
    name: 'Inicio',
    href: '/',
  },
  {
    name: 'FUNDACITE',
    href: '#about',
  },
  {
    name: 'Programas',
    href: '#programs',
  },
  {
    name: 'Postulaciones',
    href: '#postulations',
  },
  {
    name: 'Contactos',
    href: '#contact',
  },
]
export const SOCIAL_MEDIA_LINKS = [
  {
    href: 'https://www.facebook.com/fundaciteara',
    name: 'Facebook',
    svg: (
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 8 19"
      >
        <path
          fillRule="evenodd"
          d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/fundacite_aragua/',
    name: 'Instagram',
    svg: (
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
      </svg>
    ),
  },
  {
    href: 'mailto:correo@fundacite.com',
    name: 'Correo electrónico',
    svg: (
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z" />
      </svg>
    ),
  },
  {
    href: 'https://x.com/fundacitearagua',
    name: 'X',
    svg: (
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
]

export const ENTES_ADSCRITOS = [
  {
    name: 'Fundacite Aragua',
    logo: '/fundacite-logo.webp',
  },
  {
    name: 'Fundacite Aragua',
    logo: '/fundacite-logo.webp',
  },
  {
    name: 'Fundacite Aragua',
    logo: '/fundacite-logo.webp',
  },
  {
    name: 'Fundacite Aragua',
    logo: '/fundacite-logo.webp',
  },
  {
    name: 'Fundacite Aragua',
    logo: '/fundacite-logo.webp',
  },
  {
    name: 'Fundacite Aragua',
    logo: '/fundacite-logo.webp',
  },
  {
    name: 'Fundacite Aragua',
    logo: '/fundacite-logo.webp',
  },
]

export const TABS_ABOUT = [
  {
    id: 'mision',
    name: 'Misión',
    content: 'lorem ipsum Misión',
  },
  {
    id: 'vision',
    name: 'Visión',
    content: 'lorem ipsum Visión',
  },
  {
    id: 'valores',
    name: 'Valores',
    content: 'lorem ipsum Valores',
  },
  {
    id: 'competencias',
    name: 'Competencias',
    content: 'lorem ipsum Competencias',
  },
  {
    id: 'historia',
    name: 'Historia',
    content: 'lorem ipsum Historia',
  },
]
