// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  S,
  Slide,
  Spectacle,
  Text
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')


const images = {
  safetyNet: require('../assets/safetyNet.jpg'),
  kludge: require('../assets/kludge.jpg'),
  ductTape: require('../assets/ductTape.jpg'),
  waterfall: require('../assets/waterfall.jpg'),
  waterfallModel: require('../assets/waterfall_model.svg'),
  jenga: require('../assets/jenga.jpg'),
  clean: require('../assets/clean.jpg'),
  bowling: require('../assets/bowling.jpg'),
  ticTacToe: require('../assets/ticTacToe.jpg')
}

preloader(images);

const theme = createTheme({
  primary: '#007EC1',
  secondary: '#ffffff',
  success: '#5cb85c',
  danger: '#d9534f'
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['none']} transitionDuration={500} progress="none">
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Test Driven Development
            </Heading>
          </Slide>
          <Slide bgImage={images.waterfall.replace('/', '')} bgDarken={0.6}>
            <Heading size={1} caps lineHeight={1}>
              Waterfall model
            </Heading>
            <Image src={images.waterfallModel.replace('/', '')} width="75%"/>
          </Slide>
          <Slide bgImage={images.waterfall.replace('/', '')} bgDarken={0.6}>
            <Heading size={1} caps lineHeight={1}>
              Reality
            </Heading>
            <List>
              <Appear fid="1"><ListItem>Requirements are not always clear beforehand ...</ListItem></Appear>
              <Appear fid="2"><ListItem>... or change</ListItem></Appear>
              <Appear fid="3"><ListItem>Software design is often a learning process</ListItem></Appear>
            </List>
            <Appear fid="4">
              <Heading size={4} caps lineHeight={1} textColor="white">
                <S type="strikethrough">Never change a running system.</S>
              </Heading>
            </Appear>
          </Slide>
          <Slide bgImage={images.waterfall.replace('/', '')} bgDarken={0.6}>
            <Heading size={1} caps lineHeight={1}>
              Reality
            </Heading>
            <List>
              <ListItem>Requirements are not always clear beforehand ...</ListItem>
              <ListItem>... or change</ListItem>
              <ListItem>Software design is often a learning process</ListItem>
            </List>
            <Heading size={4} caps lineHeight={1} textColor="white">
              Embrace Change.
            </Heading>
          </Slide>
          <Slide bgImage={images.jenga.replace('/', '')} bgDarken={0.6}>
            <Heading size={1} caps lineHeight={1}>
              Reality... again
            </Heading>
            <List>
              <Appear fid="1"><ListItem>Did our change break our software?</ListItem></Appear>
              <Appear fid="2"><ListItem>If so, did we detect the problem before shipping?</ListItem></Appear>
            </List>
            <Appear fid="3">
              <Heading size={4} caps lineHeight={1} textColor="white">
                drive the development with automated tests
              </Heading>
            </Appear>
          </Slide>
          <Slide bgImage={images.safetyNet.replace('/', '')} bgDarken={0.6}>
            <Heading size={1} caps>
              TDD-Cycle
            </Heading>
            <Layout>
              <div style={{width: '33%'}}>
                <Appear fid="1">
                  <Heading size={2} caps lineHeight={1} textColor="danger">
                    Red
                  </Heading>
                </Appear>
                <Appear fid="1">
                  <Text textColor="white">
                    Write a little test that fails
                  </Text>
                </Appear>
              </div>
              <div style={{width: '33%'}}/>
              <div style={{width: '33%'}}/>
            </Layout>
          </Slide>
          <Slide bgImage={images.kludge.replace('/', '')} bgDarken={0.6}>
            <Heading size={1} caps>
              TDD-Cycle
            </Heading>
            <Layout>
              <div style={{width: '33%'}}>
                <Heading size={2} caps lineHeight={1} textColor="danger">
                  Red
                </Heading>
                <Text textColor="white">
                  Write a little test that fails
                </Text>
              </div>
              <div style={{width: '33%'}}>
                <Heading size={2} caps lineHeight={1} textColor="success">
                  Green
                </Heading>
                <Appear fid="1">
                  <Text textColor="white">
                    Make the test work quickly
                  </Text>
                </Appear>
              </div>
              <div style={{width: '33%'}}/>
            </Layout>
          </Slide>
          <Slide bgImage={images.ductTape.replace('/', '')} bgDarken={0.6}>
            <Heading size={1} caps>
              TDD-Cycle
            </Heading>
            <Layout>
              <div style={{width: '33%'}}>
                <Heading size={2} caps lineHeight={1} textColor="danger">
                  Red
                </Heading>
                <Text textColor="white">
                  Write a little test that fails
                </Text>
              </div>
              <div style={{width: '33%'}}>
                <Heading size={2} caps lineHeight={1} textColor="success">
                  Green
                </Heading>
                <Text textColor="white">
                  Make the test work quickly and dirty
                </Text>
              </div>
              <div style={{width: '33%'}}/>
            </Layout>
          </Slide>
          <Slide bgImage={images.clean.replace('/', '')} bgDarken={0.6}>
            <Heading size={1} caps>
              TDD-Cycle
            </Heading>
            <Layout>
              <div style={{width: '33%'}}>
                <Heading size={2} caps lineHeight={1} textColor="danger">
                  Red
                </Heading>
                <Text textColor="white">
                  Write a little test that fails
                </Text>
              </div>
              <div style={{width: '33%'}}>
                <Heading size={2} caps lineHeight={1} textColor="success">
                  Green
                </Heading>
                <Text textColor="white">
                  Make the test work quickly and dirty
                </Text>
              </div>
              <div style={{width: '33%'}}>
                <Heading size={2} caps lineHeight={1} textColor="primary">
                  Refactor
                </Heading>
                <Appear fid="1">
                  <Text textColor="white">
                    Clean up by eliminating all duplication
                  </Text>
                </Appear>
              </div>
            </Layout>
          </Slide>
          <Slide bgImage={images.bowling.replace('/', '')} bgDarken={0.6}>
            <Heading size={1} fit caps>
              Bowling game kata
            </Heading>
            <List>
              <ListItem textSize="32">A game of bowling consists of ten frames</ListItem>
              <ListItem textSize="32">In each frame, the bowler will have two chances to knock down as many pins as possible</ListItem>
              <ListItem textSize="32">If a bowler is able to knock down all ten pins with the first ball, he is awarded a strike</ListItem>
              <ListItem textSize="32">If the bowler is able to knock down all 10 pins with the two balls of a frame, it is known as a spare.</ListItem>
              <ListItem textSize="32">Bonus points are awarded for both of these, depending on what is scored in the next two balls (for a strike) or one ball (for a spare).</ListItem>
              <ListItem textSize="32">The bowler is allowed to throw two extra balls for achieving a strike in the tenth frame, or one extra ball for achieving a spare.</ListItem>
            </List>
            <Text textColor="white">
              Source: Wikipedia, {}
              <Link textColor="white" href="https://en.wikipedia.org/wiki/Ten-pin_bowling"
                    style={{textDecoration: 'underline'}}>
                Ten-pin bowling
              </Link>
            </Text>
          </Slide>
          <Slide bgImage={images.ticTacToe.replace('/', '')} bgDarken={0.6}>
            <Heading size={1} fit caps>
              Pair Programming Session 1
            </Heading>
          </Slide>
          <Slide bgImage={images.ticTacToe.replace('/', '')} bgDarken={0.6}>
            <Heading size={1} fit caps>
              Pair Programming Session 2
            </Heading>
          </Slide>
          <Slide bgColor="black">
            <Heading size={1} caps>
              Credits and Stuff
            </Heading><br />
            <Text textColor="white">
              <Link textColor="white" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                <i className="cc cc-cc"/> {}
                <i className="cc cc-by"/> {}
                <i className="cc cc-sa"/>
              </Link>
            </Text>
            <Text textColor="white">
              This work by {}
              <Link textColor="white" href="http://keinholz.com" property="cc:attributionName" rel="cc:attributionURL"
                    style={{textDecoration: 'underline'}}>
                Jonas Keinholz
              </Link> {}
              is licensed under a {}
              <Link textColor="white" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"
                    style={{textDecoration: 'underline'}}>
                Creative Commons Attribution 4.0 International License
              </Link>.
            </Text><br />
            <Heading size={4} fit caps textColor="white">
              Stuff used from other awesome people
            </Heading>
            <List>
              <ListItem textSize="14">
                <Link textColor="white" href="https://pixabay.com/en/waterfalls-river-stream-water-691917/"
                      style={{textDecoration: 'underline'}}>Untitled</Link> {}
                by {}
                <Link textColor="white" href="https://pixabay.com/en/users/Unsplash-242387/"
                      style={{textDecoration: 'underline'}}>Unsplash</Link>
                , licensed under {}
                <Link textColor="white" href="https://creativecommons.org/publicdomain/zero/1.0/"
                      style={{textDecoration: 'underline'}}>CC0</Link>
                , minimized, darkened and cropped from original
              </ListItem>
              <ListItem textSize="14">
                <Link textColor="white" href="https://commons.wikimedia.org/wiki/File:Waterfall_model.svg"
                      style={{textDecoration: 'underline'}}>Waterfall Model</Link> {}
                by Peter Kemp / Paul Smith, licensed under {}
                <Link textColor="white" href="https://creativecommons.org/licenses/by/3.0/deed.en"
                      style={{textDecoration: 'underline'}}>CC BY</Link>
                , minimized, darkened and cropped from original
              </ListItem>
              <ListItem textSize="14">
                <Link textColor="white" href="https://www.flickr.com/photos/thewazir/3139997483/"
                      style={{textDecoration: 'underline'}}>On the way down</Link> {}
                by {}
                <Link textColor="white" href="https://www.flickr.com/photos/thewazir/"
                      style={{textDecoration: 'underline'}}>Omer Wazir</Link>
                , licensed under {}
                <Link textColor="white" href="https://creativecommons.org/licenses/by-sa/2.0/"
                      style={{textDecoration: 'underline'}}>CC BY SA</Link>
                , minimized, darkened and cropped from original
              </ListItem>
              <ListItem textSize="14">
                <Link textColor="white" href="https://www.flickr.com/photos/iamchadhearmesnore/3629410556/"
                      style={{textDecoration: 'underline'}}>safety net</Link> {}
                by {}
                <Link textColor="white" href="https://www.flickr.com/photos/iamchadhearmesnore/"
                      style={{textDecoration: 'underline'}}>Chad</Link>
                , licensed under {}
                <Link textColor="white" href="https://creativecommons.org/licenses/by/2.0/"
                      style={{textDecoration: 'underline'}}>CC BY</Link>
                , minimized, darkened and cropped from original
              </ListItem>
              <ListItem textSize="14">
                <Link textColor="white" href="https://commons.wikimedia.org/wiki/File:Miles_Glacier_Bridge,_damage_and_kludge,_1984.jpg"
                     
                      style={{textDecoration: 'underline'}}>Miles Glacier Bridge, damage and kludge, 1984</Link> {}
                by {}
                <Link textColor="white" href="https://en.wikipedia.org/wiki/Jet_Lowe"
                      style={{textDecoration: 'underline'}}>Jet Lowe</Link>
                , under public domain
                , minimized, darkened and cropped from original
              </ListItem>
              <ListItem textSize="14">
                <Link textColor="white" href="https://commons.wikimedia.org/wiki/File:Duct-tape_Moving_Van.jpg"
                      style={{textDecoration: 'underline'}}>Duct-tape Moving Van</Link> {}
                , under public domain
                , minimized, darkened and cropped from original
              </ListItem>
              <ListItem textSize="14">
                <Link textColor="white" href="https://www.flickr.com/photos/harshlight/4695666428/"
                      style={{textDecoration: 'underline'}}>Cleaning</Link> {}
                by {}
                <Link textColor="white" href="https://www.flickr.com/photos/harshlight/"
                      style={{textDecoration: 'underline'}}>HarshLight</Link>
                , licensed under {}
                <Link textColor="white" href="https://creativecommons.org/licenses/by/2.0/"
                      style={{textDecoration: 'underline'}}>CC BY</Link>
                , minimized, darkened and cropped from original
              </ListItem>
              <ListItem textSize="14">
                <Link textColor="white" href="https://www.flickr.com/photos/dj-dwayne/5864952601/"
                      style={{textDecoration: 'underline'}}>Standing Tall</Link> {}
                by {}
                <Link textColor="white" href="https://www.flickr.com/photos/dj-dwayne/"
                      style={{textDecoration: 'underline'}}>Dwayne Madden</Link>
                , licensed under {}
                <Link textColor="white" href="https://creativecommons.org/licenses/by/2.0/"
                      style={{textDecoration: 'underline'}}>CC BY</Link>
                , minimized, darkened and cropped from original
              </ListItem>
              <ListItem textSize="14">
                <Link textColor="white" href="https://www.flickr.com/photos/frozenchipmunk/178078911/"
                      style={{textDecoration: 'underline'}}>Playground tic-tac-toe and square</Link> {}
                by {}
                <Link textColor="white" href="https://www.flickr.com/photos/frozenchipmunk/"
                      style={{textDecoration: 'underline'}}>Sharat Ganapati</Link>
                , licensed under {}
                <Link textColor="white" href="https://creativecommons.org/licenses/by/2.0/"
                      style={{textDecoration: 'underline'}}>CC BY</Link>
                , minimized, darkened and cropped from original
              </ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
