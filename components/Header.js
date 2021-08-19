import { BeakerIcon, HomeIcon, BadgeCheckIcon, CollectionIcon, 
        LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/solid';
const { default: Image } = require("next/image");
const { default: HeaderItem } = require("./HeaderItem");


function Header() {
    return (
        <div className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>
            <Image className='object-contain'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hulu_logo_2017.svg/1200px-Hulu_logo_2017.svg.png' 
                alt='Home' width={200} height={100} 
            />
        </div>
    )
}

export default Header
