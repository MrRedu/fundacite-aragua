// https://resend.com/docs/send-with-nextjs
import propTypes from 'prop-types'
export const EmailTemplate = ({
  name,
  email,
  //   companyName,
  //   services,
  //   message,
}) => (
  <div>
    <h1>Postulación para Fundacite</h1>
    <p>
      Name:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {name}
      </span>
    </p>
    <p>
      E-mail:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {email}
      </span>
    </p>
    {/* <p>
      Company name:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {companyName}
      </span>
    </p>
    <p>
      Services requested:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {services}
      </span>
    </p>
    <p>
      Project details:{' '}
      <span style={{ fontWeight: 'bold', color: 'red', lineHeight: '1' }}>
        {message}
      </span>
    </p> */}
  </div>
)
EmailTemplate.propTypes = {
  name: propTypes.string,
  email: propTypes.string,
  //   companyName: propTypes.string,
  //   services: propTypes.array,
  //   message: propTypes.string,
}
