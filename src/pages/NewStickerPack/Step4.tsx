import React from 'react'
import sticker_4 from '../../icons/sticker_4.svg'
import Grid from '@material-ui/core/Grid'
import { DashedBox } from '../../components'
import upload from '../../icons/upload.svg'

export default () => <div className="new-sticker-pack-section">
  <div className="new-sticker-pack-section-header"><h3><img src={sticker_4} /> Stickers Pack Thumbnail</h3></div>
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
          The thumbnail is used primarily to identify your pack in the menu once purchased.<br /><br />
          <a href="#">Show example</a><br /><br />
          Upload an <span className="strong">exactly 128x128 pixel</span> size thumbnail in <span className="strong">JPG or PNG</span> format.
        </p>
      </Grid>
    </Grid>
  </div>
</div>
