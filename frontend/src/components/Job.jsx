import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

function Job() {
  return (
    <div>
        <p>2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon"><Bookmark/></Button>

        <div className='flex items-center gap-2 my-2'>
        <Button className="" variant="outline" size="icon">
            <Avatar>
                <AvatarImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png'/>
            </Avatar>
        </Button>
        <div>
            <h1></h1>
        </div>
        </div>
    </div>
  )
}

export default Job