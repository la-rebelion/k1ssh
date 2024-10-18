import React from 'react';
import {BlogPostProvider} from '@docusaurus/plugin-content-blog/client';
import type { Props } from '@theme/BlogPostItems';
import InstagramPost from '@site/src/components/InstagramPost';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import clsx from 'clsx';
import { Box, Grid } from '@mui/joy';

export default function BlogPostItems({
  items,
  // component: BlogPostItemComponent = BlogPostItem,
}: Props): JSX.Element {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid container 
        spacing={2} 
      >
        {items.map(({ content: BlogPostContent }) => (
          <Grid 
            xs={12}
            sm={6}
            // md={4}
            // display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight={180}
          >
            <BlogPostProvider
              key={BlogPostContent.metadata.permalink}
              content={BlogPostContent}>
              <BlogPostItemContainer className={clsx('margin-bottom--xl', 'InstagramPostCards')}>
                <InstagramPost>
                  <BlogPostContent />
                </InstagramPost>
              </BlogPostItemContainer>
            </BlogPostProvider>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
