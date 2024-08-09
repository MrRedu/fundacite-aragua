// https://resend.com/docs/send-with-nextjs
import propTypes from 'prop-types'
export const EmailTemplate = ({ email, names, lastnames, to }) => (
  <div>
    <h1>Postulación para Fundacite</h1>
    <p>
      Nombres:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {names}
      </span>
    </p>
    <p>
      Apellidos:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {lastnames}
      </span>
    </p>
    <p>
      Correo electrónico:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {email}
      </span>
    </p>
    <p>
      Postulación para:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {to}
      </span>
    </p>
  </div>
)
EmailTemplate.propTypes = {
  names: propTypes.string,
  lastnames: propTypes.string,
  email: propTypes.string,
  to: propTypes.string,
}
