import React from "react"
import Layout from "../../components/layout"
import { useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const AboutTechPage = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <h1 className="display-2">Tech and Tools</h1>

        <h2>Web Development</h2>
        <p>I am primarily a front-end developer, with some back-end skills</p>

        <p>
          I use Visual Studio Code (in some purple theme), iTerm (zsh,
          oh-my-zsh, Powerline 10k in Purple Rain) and Git/Github as my main
          tools. And yes, I prefer dark themes.
        </p>

        <h2> Photography/Video</h2>
        <p>
          I use an Olympus OM-D M10 with either a Oly 14-45mm, Oly 40-150mm or
          f1.9 Yashica 50mm. Older pics were taken with a purple Olympus E-PM1
          PEN camera. So there is nothing too fancy there. I looked into other
          cameras (like the Sony) but they were mostly beyond my budget.
        </p>
        <p>
          For software, I use Affinity Photo. For videos I plan to use DaVinci
          Resolve. I previously used some old version of Premiere Pro.
        </p>
        <p>
          Or sometimes I just use my phone (Instagram is almost all phone pics).
        </p>

        <h2>Desktop Set-up</h2>
        <p>
          I don't really store things on the desktop. I just spotlight search
          most things. Oh my physical desktop...
        </p>
        <p>
          I am using a 2015 15" MacBook Pro, a old 20" Samsung monitor that I
          apparently only sometimes plug in, a Logitech g502 Hero because I am
          too cheap for an MX Master and I cannot be trusted with receivers. I
          use a desk mat, it was an upgrade for the cardboard I was previously
          using.
        </p>
        <p>
          I grew up with mostly Windows but switched to MacOS for ease of using
          unix shell tools. tools for development. I know it can be done with
          Windows and for some it works well, but I really do not need to fight
          with my OS too. I occasionally boot into Windows to play some games.
          Well, mostly Zoo Tycoon and old crappy horsey games...so I probably
          don't need a dedicated gaming rig.
        </p>
        <h2>Other</h2>
        <p>
          {" "}
          I am not much of an illustrator so I don't draw much nowadays. The
          rare times I do, it's almost always in raster.
        </p>
        <p> I write sometimes, but nothing publishable, really.</p>
        <p>
          {" "}
          I do not have a background in music or audio production so no music I
          use is mine.
        </p>
      </div>
    </Layout>
  )
}

export default AboutTechPage
