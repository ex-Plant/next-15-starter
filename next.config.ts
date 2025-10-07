import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	typedRoutes: true,
	/* config options here */

	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		// ignoreBuildErrors: true,
	},
};

export default nextConfig;
