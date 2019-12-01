import React, { FC } from 'react'
import { Image as ReactPixelImage, ImageProvider } from 'react-pixel'

type ImageProps = {
  /** React Pixel compatible image ID */
  image: string

  /** Absolute URL where images are hosted */
  baseUrl: string

  /** Alternative text for screen reader users */
  description: string

  /** React Pixel compatible preview image */
  preview?: string
}

const Image: FC<ImageProps> = ({ image, baseUrl, description, preview }) => (
  <ImageProvider baseUrl={baseUrl}>
    <ReactPixelImage
      image={image}
      description={description}
      preview={preview}
    />
  </ImageProvider>
)

Image.displayName = 'Image'

export default Image
