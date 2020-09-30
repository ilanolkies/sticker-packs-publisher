import React from 'react'
import sticker_2 from '../../icons/sticker_2.svg'
import Grid from '@material-ui/core/Grid'
import { DashedBox } from '../../components'
import upload from '../../icons/upload.svg'

export default () => <div className="new-sticker-pack-section">
  <div className="new-sticker-pack-section-header"><h3><img src={sticker_2} /> Stickers</h3></div>
  <div className="new-sticker-pack-section-body">
    <Grid container>
      <Grid item xs={8}>
        <DashedBox style={{ height: 140 }}>
          <img src={upload} />
          <p>Drag or click to upload stickers</p>
        </DashedBox>
      </Grid>
      <Grid item xs={4}>
        <p className="muted-text">
          Upload <span className="strong">6-20 stickers in PNG or GIF</span> format with transparent background.
          Each sticker must be <span className="strong">exactly 280x280 pixel and max 400kb</span>. Please follow
          the guidelines of our <a href="https://status.im/" target="_blank">Terms and Conditions</a>.
        </p>
      </Grid>
    </Grid>
  </div>
</div>
