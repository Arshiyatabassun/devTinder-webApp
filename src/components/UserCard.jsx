

const UserCard =({user})=>{
    // console.log(user)
    const {firstName, lastName ,age ,about,gender ,photoUrl ,skills}=user;
    return (
        <div className="card bg-base-200 w-96 shadow-sm">
  <figure>
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="photo" /> */}
    <img
      src={user.photoUrl}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName +", "+lastName}</h2>
    {age && gender && <p>{age + ", "+ gender}</p>}
    <p>{about}</p>
    <p>{skills}</p>
    <div className="card-actions justify-end my-4">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
    )
}

export default UserCard;