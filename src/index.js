'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
const lint = require('neutrino-lint-base')
const merge = require('deepmerge')

/* -----------------------------------------------------------------------------
 * preset
 * -------------------------------------------------------------------------- */

module.exports = neutrino => {
  lint(neutrino)

  neutrino.config.module
    .rule('lint')
    .loader('eslint', props => merge(props, {
      options: {
        baseConfig: {
          extends: ['standard', 'standard-react']
        }
      }
    }))
}
