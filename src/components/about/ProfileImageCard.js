import ProfileCard from "../ui/ProfileCard";
function ProfileImageCard() {
	return (
          <div className="grid grid-cols-1 md:grid-cols-6 m-4 md:m-14">
          	 <ProfileCard name="Tom Cruise" image="./images/tom.png" altImg="tom image" profession="Founder & Chairman" />
          	 <ProfileCard name="Emma Watson" image="./images/emma.png" altImg="tom image" profession="Managing Director" />
          	 <ProfileCard name="Will Smith" image="./images/will.png" altImg="tom image" profession="Product Designer" />
          </div>
		)
}

export default ProfileImageCard;
