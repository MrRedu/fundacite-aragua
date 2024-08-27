// https://resend.com/docs/send-with-nextjs
import propTypes from 'prop-types'
export const EmailTemplate = ({
  names,
  lastnames,
  email,
  to,
  cedula,
  birthdate,
  phone,
  city,
  address,
  university,
  career,
}) => (
  <div>
    <h1>Postulación para Fundacite</h1>
    <p>
      Nombre:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {names} {lastnames}
      </span>
    </p>
    <p>
      Cedula:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {cedula}
      </span>
    </p>
    <p>
      Fecha de nacimiento:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {birthdate}
      </span>
    </p>
    <p>
      Telefono:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {phone}
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
    <p>
      Ciudad:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {city}
      </span>
    </p>
    <p>
      Dirección:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {address}
      </span>
    </p>
    <p>
      Universidad:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {university}
      </span>
    </p>
    <p>
      Carrera:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {career}
      </span>
    </p>
  </div>
)
EmailTemplate.propTypes = {
  names: propTypes.string,
  lastnames: propTypes.string,
  email: propTypes.string,
  to: propTypes.string,
  cedula: propTypes.string,
  birthdate: propTypes.string,
  phone: propTypes.string,
  city: propTypes.string,
  address: propTypes.string,
  university: propTypes.string,
  career: propTypes.string,
}
