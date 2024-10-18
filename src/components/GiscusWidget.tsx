import * as React from 'react';
/*
 <script src="https://giscus.app/client.js"
        data-repo="la-rebelion/apicove"
        data-repo-id="R_kgDOL4igkw"
        data-category="Conversations"
        data-category-id="DIC_kwDOL4igk84CfT-Z"
        data-mapping="title"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>
 */
export default function GiscusWidget( ): JSX.Element {
    React.useEffect(() => {
        // Check if the script already exists
        // if (document.querySelector('script[src="https://giscus.app/client.js"]')) {
        //     return;
        // }

        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.async = true;
        script.setAttribute('data-repo', "la-rebelion/apicove");
        script.setAttribute('data-repo-id', "R_kgDOM5QsIQ");
        script.setAttribute('data-category', "Conversations");
        script.setAttribute('data-category-id', "DIC_kwDOM5QsIc4Ci7kM");
        script.setAttribute('data-mapping', "title");
        script.setAttribute('data-strict', "0");
        script.setAttribute('data-reactions-enabled', "1");
        script.setAttribute('data-emit-metadata', "0");
        script.setAttribute('data-input-position', "bottom");
        script.setAttribute('data-theme', "light"); //"preferred_color_scheme");
        script.setAttribute('data-lang', "en");
        script.setAttribute('data-loading', "lazy");
        script.crossOrigin = "anonymous";
    
        document.body.appendChild(script);

        return () => {
          // clean up the script tag that we added when the component is unmounted
          document.body.removeChild(script);
        }
      }, []);
    
      
    return (
        <>
            <div class="giscus" id="giscus"></div>
        </>
    );
}
