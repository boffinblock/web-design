import { FaLinkedinIn } from "react-icons/fa";
const SupportedTeam = () => {
  const profiles = [
    {
      name: 'anelas',
      expertise: '& B2B Marketing',
      imageUrl: '/src/assets/p5.png',
      linkedin: <FaLinkedinIn />
    },
    {
      name: 'Linda Le',
      expertise: 'Tech Recruiting & Branding',
      imageUrl: '/src/assets/p3.png',
      linkedin: <FaLinkedinIn />
    },
    {
      name: 'Josh Roa',
      expertise: 'GTM & Venture Capital',
      imageUrl: '/src/assets/p6.png',
      linkedin: <FaLinkedinIn />
    },
    {
      name: 'Josh adam',
      expertise: 'GTM & Venture Capital',
      imageUrl: '/src/assets/p5.png',
      linkedin: <FaLinkedinIn />
    },

  ];

  const profilesNo2 = [
    {
      name: 'Awis Khan',
      expertise: 'Ai / Tech',
      imageUrl: '/src/assets/p5.png',
      linkedin: <FaLinkedinIn />
    },
    {
      name: 'kryten Conner',
      expertise: 'B2b sales',
      imageUrl: '/src/assets/p3.png',
      linkedin: <FaLinkedinIn />
    },
    {
      name: 'Micheal Hensan',
      expertise: 'GTM & B2b sales',
      imageUrl: '/src/assets/p6.png',
      linkedin: <FaLinkedinIn />
    },
    {
      name: 'Josh Roth',
      expertise: 'GTM & Venture Capital',
      imageUrl: '/src/assets/p5.png',
      linkedin: <FaLinkedinIn />
    },

  ];

  const profilesNo3 = [
    {
      name: 'Deniel Densey',
      expertise: 'Social sales',
      imageUrl: '/src/assets/p5.png',
      linkedin: <FaLinkedinIn />
    },
    {
      name: 'Alis Pates',
      expertise: 'Tech Recruiting & venture sales',
      imageUrl: '/src/assets/p3.png',
      linkedin: <FaLinkedinIn />
    },
    {
      name: 'Jay schedwldon',
      expertise: 'Content writter',
      imageUrl: '/src/assets/p6.png',
      linkedin: <FaLinkedinIn />
    },
    {
      name: 'Roman Pikadlit',
      expertise: 'Marketing',
      imageUrl: '/src/assets/p5.png',
      linkedin: <FaLinkedinIn />
    },

  ];

  const profilesNo4 = [
    {
      name: 'Kevin Mayer',
      expertise: ' Sales & B2B Marketing',
      imageUrl: '/src/assets/p5.png',
      linkedin: <FaLinkedinIn />
    },
    {
      name: 'Mason cosbey',
      expertise: 'Tech Recruiting',
      imageUrl: '/src/assets/p3.png',
      linkedin: <FaLinkedinIn />
    },
    {
      name: 'Micheal Hensan',
      expertise: 'GTM & B2b sales',
      imageUrl: '/src/assets/p6.png',
      linkedin: <FaLinkedinIn />
    },
    {
      name: 'Awis Khan',
      expertise: 'Ai / Tech',
      imageUrl: '/src/assets/p5.png',
      linkedin: <FaLinkedinIn />
    },


  ];
  const profilesNo5 = [
    {
      name: 'Kevin Mayer',
      expertise: ' Sales & B2B Marketing',
      imageUrl: '/src/assets/p5.png',
      linkedin: <FaLinkedinIn />
    },
    {
      name: 'kryten Conner',
      expertise: 'B2b sales',
      imageUrl: '/src/assets/p3.png',
      linkedin: <FaLinkedinIn />
    },
    {
      name: 'Peter walker',
      expertise: 'Venture Capital',
      imageUrl: '/src/assets/p6.png',
      linkedin: <FaLinkedinIn />
    },
    {
      name: 'Guilo Sangitha',
      expertise: 'HR & Venture Capital',
      imageUrl: '/src/assets/p5.png',
      linkedin: <FaLinkedinIn />
    },


  ];
  return (
    <>
      <div className=" overflow-x-hidden py-12">
        {/* <div className="  sm:px-6 lg:px-8"> */}
        <h1 className="text-3xl font-semibold font-work text-center mb-12">Supported by rockstar team</h1>
        <div className=" max-sm:mx-auto  ml-[-3rem] w-[97%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.name}
              className="bg-white flex gap-2 shadow-md rounded-md overflow-hidden w-[320px] hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out"
            >
              <div className="h-12 w-12 mt-5 bg-cover" style={{ backgroundImage: `url(${profile.imageUrl})` }}></div>
              <div className="p-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-medium text-gray-900">{profile.name}</h3>
                  <h3 className="text-lg text-gray-900">{profile.linkedin}</h3>
                </div>
                <p className="text-sm text-gray-500">{profile.expertise}</p>
              </div>
            </div>
          ))}
        </div>

        <div className=" max-sm:mx-auto ml-[3rem] w-[97%] mt-6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {profilesNo2.map((profile) => (
            <div
              key={profile.name}
              className="bg-white flex gap-2 shadow-md rounded-md overflow-hidden  w-[320px] hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out"
            >
              <div className="h-12 w-12 mt-5 bg-cover" style={{ backgroundImage: `url(${profile.imageUrl})` }}></div>
              <div className="p-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-medium text-gray-900">{profile.name}</h3>
                  <h3 className="text-lg text-gray-900">{profile.linkedin}</h3>
                </div>
                <p className="text-sm text-gray-500">{profile.expertise}</p>
              </div>
            </div>
          ))}
        </div>

        <div className=" max-sm:mx-auto grid ml-[-3rem] w-[93%] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-6">
          {profilesNo3.map((profile) => (
            <div
              key={profile.name}
              className="bg-white flex gap-2 shadow-md rounded-md overflow-hidden  w-[320px] hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out"
            >
              <div className="h-12 w-12 mt-5 bg-cover" style={{ backgroundImage: `url(${profile.imageUrl})` }}></div>
              <div className="p-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-medium text-gray-900">{profile.name}</h3>
                  <h3 className="text-lg text-gray-900">{profile.linkedin}</h3>
                </div>
                <p className="text-sm text-gray-500">{profile.expertise}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid max-sm:mx-auto w-[89%] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-6">
          {profilesNo4.map((profile) => (
            <div
              key={profile.name}
              className="bg-white flex gap-2 shadow-md rounded-md overflow-hidden w-[320px] hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out" 
            >
              <div className="h-12 w-12 mt-5 bg-cover" style={{ backgroundImage: `url(${profile.imageUrl})` }}></div>
              <div className="p-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-medium text-gray-900">{profile.name}</h3>
                  <h3 className="text-lg text-gray-900">{profile.linkedin}</h3>
                </div>
                <p className="text-sm text-gray-500">{profile.expertise}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid max-sm:mx-auto ml-[-5rem] w-[89%] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-6">
          {profilesNo5.map((profile) => (
            <div
              key={profile.name}
              className="bg-white flex gap-2 shadow-md rounded-md overflow-hidden  w-[320px] hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out"
            >
              <div className="h-12 w-12 mt-5 bg-cover" style={{ backgroundImage: `url(${profile.imageUrl})` }}></div>
              <div className="p-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-medium text-gray-900">{profile.name}</h3>
                  <h3 className="text-lg text-gray-900">{profile.linkedin}</h3>
                </div>
                <p className="text-sm text-gray-500">{profile.expertise}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
      {/* </div> */}
    </>
  )
}

export default SupportedTeam