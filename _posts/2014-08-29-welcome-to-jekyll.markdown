---
layout: post
title:  "Welcome to Jekyll!"
date:   2014-08-29 14:34:25
categories: jekyll update
tags: featured
image: /assets/article_images/2014-08-29-welcome-to-jekyll/desktop.jpg
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve --watch`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

{% highlight js %}

<footer class="site-footer">
 <a class="subscribe" href="{{ "/feed.xml" | prepend: site.baseurl }}"> <span class="tooltip"> <i class="fa fa-rss"></i> Subscribe!</span></a>
  <div class="inner">a
   <section class="copyright">All content copyright <a href="mailto:{{ site.email}}">{{ site.name }}</a> &copy; {{ site.time | date: '%Y' }} &bull; All rights reserved.</section>
   <section class="poweredby">Made with <a href="http://jekyllrb.com"> Jekyll</a></section>
  </div>
</footer>
{% endhighlight %}

<div class="post-footer">
		<div class="share">
		{% for social in site.social %}
		{% if social.share_url != null %}
		<a style="text-decoration: none;" class="icon-{{ social.icon }}" href="{{ social.share_url }}{{ social.share_title }}{{page.title | cgi_escape}}{{ social.share_link }}{{site.url}}{{page.id}}"
		  onclick="window.open(this.href, '{{ social.icon }}-share', 'width=550,height=255');return false;">

		<h4 style="font-size: 13pt;">Compartilhe</h4>
		<i class="fa fa-{{ social.icon }}"></i><span class="hidden">{{ social.icon }}</span>
		</a>
		<!--      {% endif %}
		{% endfor %}  -->
		</div>
</div>
	

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help

		
<div id="disqus_thread"></div>
<script type="text/javascript">
    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
     var disqus_shortname = 'desenvolvimentoweb'; // required: replace example with your forum shortname
		var disqus_title = 'Perguntas e Respostas - Jekyll';
		var disqus_url = 'http://tailomateus.github.io/jekyll/update/2014/08/29/welcome-to-jekyll.html';
    var disqus_identifier = 'http://tailomateus.github.io/jekyll/update/2014/08/29/welcome-to-jekyll.html';
	
    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
<a href="http://disqus.com" class="dsq-brlink"><span class="logo-disqus">Comentários:</span></a>