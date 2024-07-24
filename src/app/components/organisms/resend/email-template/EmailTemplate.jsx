// https://resend.com/docs/send-with-nextjs
import propTypes from 'prop-types'
export const EmailTemplate = ({ names, lastnames, email, phone, message }) => (
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
      Número de teléfono:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {phone}
      </span>
    </p>
    <p>
      Mensaje:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {message}
      </span>
    </p>
  </div>
)
EmailTemplate.propTypes = {
  names: propTypes.string,
  lastnames: propTypes.string,
  email: propTypes.string,
  phone: propTypes.string,
  message: propTypes.string,
}
