import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
}

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')
const withMDX = createMDX()

export default withNextIntl(withMDX(nextConfig))
