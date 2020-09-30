import React from 'react'
import './style.scss'

type DashedBoxProps = { children: React.ReactChildren }

export default ({ children, ...props }: DashedBoxProps) => <div className="dashborad-new-sticker-pack-border" {...props}>
  <div className="dashborad-new-sticker-pack-container">
    <div className="dashborad-new-sticker-pack-content">
      {children}
    </div>
  </div>
</div>
