import propTypes from 'prop-types'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
export const XTimelineEmbed = ({
  userId = '143858083',
  screenName,
  options = { width: '400px', height: '500px' },
  lang = 'es',
}) => {
  return (
    <TwitterTimelineEmbed
      sourceType="profile"
      // userId={userId}
      // screenName={screenName}
      screenName={'FundaciteAragua'}
      options={{ ...options }}
      lang={lang}
    />
  )
}
XTimelineEmbed.propTypes = {
  userId: propTypes.string,
  screenName: propTypes.string,
  options: propTypes.object,
  lang: propTypes.string,
}
