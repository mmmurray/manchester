import Image from '.'
import { createComponentDocs } from '../../showcase/docs'

export default createComponentDocs({
  component: Image,
  props: {
    image: {
      description: '',
      value:
        '022652f4e7b0338cc7c17a0951adfee6f4ef5b1f:2560x1440,1280x720,640x360,320x180,32x18',
    },
    baseUrl: {
      description: '',
      value: 'https://mark.murray.xyz/static/unversioned',
    },
    description: { description: '', value: 'Manchester skyline' },
    preview: {
      description: '',
      value:
        '/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAASACADASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQGBwgD/8QAKRAAAQMDAgUDBQAAAAAAAAAAAQIDBAAFERIxBhMhQVEHImEUI0Jygf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCyZ7FrhtzA5Ljc6IjU6zzUhacjIGCdz280lYGrdfY6XYiw25jKmXiErTjfpnrVNjhuzRXJllm36VPnSAnmx4zS5bwUknGVDAB92yvApKQvh3hcr+rL70tecsOvBb5GO6GsJb/qj3oLramwol4lxJyWm2mnktIdDqQnsCVEkDcjap3bIdncfDLNxiOu76W3AvpjOTjYfNZCbvtguSHENQVM3B90KbdLx0lzfAGdIPztTjfGV9jSFKS/MaZDXLDiNKua3qzpykDx5oJFxGo270/uIt5MQa0dGPt/gg9vms9BxZJUVqKick560UUDjfujxM9cuO5z+qa72aVIzIRz3dBYPt1nG1FFB//Z',
    },
  },
})
