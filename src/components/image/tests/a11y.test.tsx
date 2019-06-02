import React from 'react'
import Image from '..'
import { Wrapper } from '../../../test-utils'

test('default image a11y', async () => {
  await expect(
    <Wrapper>
      <Image
        image="9355161b83fdd3854c7596520dee736c3153b6b7:2560x1440,1280x720,640x360,320x180,32x18"
        baseUrl="https://mark.murray.xyz/static/unversioned"
        description="Test image description"
        preview="/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAASACADASIAAhEBAxEB/8QAGgAAAQUBAAAAAAAAAAAAAAAAAAECAwcIBP/EACUQAAEDAgUEAwAAAAAAAAAAAAIAAREEBQMHMlGREhQxgiRUkv/EABcBAQEBAQAAAAAAAAAAAAAAAAQCAQP/xAAbEQACAgMBAAAAAAAAAAAAAAAAAQIDFEFRBP/aAAwDAQACEQMRAD8A06NMzeE9qdlnXBzhu76qrkWXSOb9z+wL+rJePN7QJ+utaZoDth2SPSjMwqBfN26PMVLfllCebt2h/mR6MtxrOojNq4ygcMy6o6nid1OBnOovO6EJMQUx7GU6i5SuZTqLlCFZzP/Z"
      />
    </Wrapper>,
  ).toMatchA11ySnapshot()
})
