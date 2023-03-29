import ProfileCard from '../ProfileCard/ProfileCard'

const Profile = () => {
  return (
    <div className={`Profile relative grid grid-template-columns: 18rem auto 20rem gap-1`}>
      <div className={`Profile-center flex flex-col gap-1`}>
        <ProfileCard/>
      </div>
    </div>
  )
}

export default Profile
