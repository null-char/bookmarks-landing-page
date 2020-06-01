import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import bookmarkLogo from "@/assets/logo-bookmark-white.svg";
import facebookLogo from "@/assets/icon-facebook.svg";
import twitterLogo from "@/assets/icon-twitter.svg";
import errorIcon from "@/assets/icon-error.svg";
import {
  Wrapper,
  NewsLetter,
  TextContent,
  NewsLetterHeading,
  StatsText,
  Links,
  MainLinks,
  SocialMediaLinks,
  Logo,
  SocialMediaLogo,
  TextLink,
  Contact,
  ContactForm,
  ContactInputContainer,
  ContactInput,
  ErrorIcon,
  ContactBtn,
  ErrorMessage,
} from "@/components/footer/styles";

const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState("");
  const [error, setError] = useState("");
  const [hasError, setHasError] = useState(false);

  const errorTransitions = useTransition(hasError, null, {
    from: { opacity: 0, maxHeight: "0rem" },
    enter: { opacity: 1, maxHeight: "3.4rem" },
    leave: { opacity: 0, maxHeight: "0rem" },
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (error || hasError) {
      setError("");
      setHasError(false);
    }

    const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

    if (!emailRegex.test(emailInput)) {
      setError("Whoops, make sure it's an email");
      setHasError(true);
    }
  };

  return (
    <Wrapper>
      <NewsLetter>
        <TextContent>
          <StatsText>35,000+ already joined</StatsText>
          <NewsLetterHeading>
            Stay up-to-date with what we're doing
          </NewsLetterHeading>
        </TextContent>

        <ContactForm>
          <Contact>
            <ContactInputContainer>
              <ContactInput
                type="email"
                value={emailInput}
                onChange={onInputChange}
                placeholder="Enter your email address"
              />
              {errorTransitions.map(
                ({ item, key, props }) =>
                  item && (
                    <animated.div key={key} style={props}>
                      <ErrorIcon src={errorIcon} alt="error" />
                    </animated.div>
                  )
              )}
            </ContactInputContainer>

            {errorTransitions.map(
              ({ item, key, props }) =>
                item && (
                  <ErrorMessage key={key} style={props}>
                    {error}
                  </ErrorMessage>
                )
            )}
          </Contact>

          <ContactBtn tertiary onClick={onFormSubmit} hasError={hasError}>
            Contact Us
          </ContactBtn>
        </ContactForm>
      </NewsLetter>

      <Links>
        <MainLinks>
          <Logo src={bookmarkLogo} alt="bookmark logo" />
          <TextLink>Features</TextLink>
          <TextLink>Pricing</TextLink>
          <TextLink>Contact</TextLink>
        </MainLinks>

        <SocialMediaLinks>
          <SocialMediaLogo src={facebookLogo} alt="facebook logo" />
          <SocialMediaLogo src={twitterLogo} alt="twitter logo" />
        </SocialMediaLinks>
      </Links>
    </Wrapper>
  );
};

export default Footer;
