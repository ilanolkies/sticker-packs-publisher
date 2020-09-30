import React from 'react'
import './style.scss'

export default ({ onClick, children }) => <div className="dashborad-new-sticker-pack-border" onClick={onClick}>
  <div className="dashborad-new-sticker-pack-container">
    <div className="dashborad-new-sticker-pack-content">
      {children}
    </div>
  </div>
</div>
