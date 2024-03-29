import { info } from '../../team-info'
import Profile from '@/component/profile'

export default function Home() {
  const title = '피트니를 만드는 사람들'
  const subtitle = '팀 피트니에서 운동 루틴 서비스의 '
  const subtitle2 = '새로운 가능성을 개척하는 피트니 팀원들을 소개합니다.'

  return (
    <div className="about-us">
      <div className="title">{title}</div>
      <div className="sub-title">
        {subtitle}
        <br className="only-mini" />
        {subtitle2}
      </div>
      <div className="profile-container">
        {info.map((info) => (
          <div key={info.name}>
            <Profile info={info} />
          </div>
        ))}
      </div>
    </div>
  )
}
