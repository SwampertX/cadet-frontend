import { Button, ButtonGroup, Dialog } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import * as React from 'react'
import { NavLink } from 'react-router-dom'

export interface ILoginProps {
  token?: string
  handleChangeToken: (s: string) => void
}

const loginButton = (handleClick: () => void) => (
  <Button className="pt-large" rightIcon="log-in" onClick={handleClick}>
    Log in with IVLE
  </Button>
)

const playgroundButton = (
  <NavLink to="/playground">
    <Button className="pt-large" rightIcon="code">
      Try out the playground
    </Button>
  </NavLink>
)

const LoginDialog: React.SFC<ILoginProps> = props => (
  <div>
    <Dialog
      icon={IconNames.LOCK}
      isOpen={props.token === undefined ? true : false}
      title="LOGIN"
      isCloseButtonShown={false}
      className="login pt-dark"
    >
      <div className="pt-dialog-body">
        <ButtonGroup fill={true} vertical={true}>
          {loginButton(() => props.handleChangeToken('TODO'))}
          {playgroundButton}
        </ButtonGroup>
      </div>
    </Dialog>
  </div>
)

export default LoginDialog