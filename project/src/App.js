import React, { useState, useEffect } from 'react'
import grapesjs from 'grapesjs'

import './styles/main.scss'

function App () {
  const [editor, setEditor] = useState(null)
  useEffect(() => {
    // const editor = grapesjs.init({
    //   container: '#editor',
    //   // fromElement: true,
    //   // Size of the editor
    //   // height: 'auto'
    //   width: 'auto',
    //   // Disable the storage manager for the moment
    //   // storageManager: true,
    //   // Avoid any default panel
    //   // panels: { defaults: [] }
    //   plugins: [gjsPresetWebpage],
    //   pluginsOpts: {
    //     gjsPresetWebpage: {}
    //   }
    // })

    const editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: '600px',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: false,
      // Avoid any default panel
      // panels: { defaults: [] },
      mediaCondition: 'min-width', // default is `max-width`
      deviceManager: {
        devices: [
          {
            name: 'Mobile',
            width: '320',
            widthMedia: ''
          },
          {
            name: 'Desktop',
            width: '',
            widthMedia: '1024'
          }
        ]
      },
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'section', // id is mandatory
            label: '<b>Section</b>', // You can use HTML/SVG inside labels
            attributes: { class: 'gjs-block-section' },
            content: `<section>
                        <h1>This is a simple title</h1>
                        <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
                      </section>`
          },
          {
            id: 'text',
            // label: 'Text',
            content: '<div data-gjs-type="text">Insert your text here</div>',
            media: `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
                    </svg>`
          },
          {
            id: 'image',
            // label: 'Image',
            media: `<svg style='width:48px;height:48px' viewBox='0 0 24 24'>
                      <path
                        fill='currentColor'
                        d='M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z'
                      />
                    </svg>`,

            // Select the component once it's dropped
            select: true,
            // You can pass components as a JSON instead of a simple HTML string,
            // in this case we also use a defined component type `image`
            content: { type: 'image' },
            // This triggers `active` event on dropped components and the `image`
            // reacts by opening the AssetManager
            activate: true
          }
        ]
      },
      layerManager: {
        appendTo: '.layers-container'
      },
      // We define a default panel as a sidebar to contain layers
      panels: {
        defaults: [
          {
            id: 'layers',
            el: '.panel__right',
            // Make the panel resizable
            resizable: {
              maxDim: 350,
              minDim: 200,
              tc: 0, // Top handler
              cl: 1, // Left handler
              cr: 0, // Right handler
              bc: 0, // Bottom handler
              // Being a flex child we need to change `flex-basis` property
              // instead of the `width` (default)
              keyWidth: 'flex-basis'
            }
          },
          {
            id: 'panel-switcher',
            el: '.panel__switcher',
            buttons: [
              {
                id: 'show-layers',
                active: true,
                label: 'Layers',
                command: 'show-layers',
                // Once activated disable the possibility to turn it off
                togglable: false
              },
              {
                id: 'show-style',
                active: true,
                label: 'Styles',
                command: 'show-styles',
                togglable: false
              },
              {
                id: 'show-traits',
                active: true,
                label: 'Traits',
                command: 'show-traits',
                togglable: false
              }
            ]
          },
          {
            id: 'panel-devices',
            el: '.panel__devices',
            buttons: [
              {
                id: 'device-desktop',
                label: 'Desktop',
                command: 'set-device-desktop',
                active: true,
                togglable: false
              },
              {
                id: 'device-mobile',
                label: 'Mobile',
                command: 'set-device-mobile',
                togglable: false
              }
            ]
          }
        ]
      },
      traitManager: {
        appendTo: '.traits-container'
      },
      // The Selector Manager allows to assign classes and
      // different states (eg. :hover) on components.
      // Generally, it's used in conjunction with Style Manager
      // but it's not mandatory
      selectorManager: {
        appendTo: '.styles-container'
      },
      styleManager: {
        appendTo: '.styles-container',
        sectors: [
          {
            name: 'Dimension',
            open: false,
            // Use built-in properties
            buildProps: ['width', 'min-height', 'padding'],
            // Use `properties` to define/override single property
            properties: [
              {
                // Type of the input,
                // options: integer | radio | select | color | slider | file | composite | stack
                type: 'integer',
                name: 'The width', // Label for the property
                property: 'width', // CSS property (if buildProps contains it will be extended)
                units: ['px', '%'], // Units, available only for 'integer' types
                defaults: 'auto', // Default value
                min: 0 // Min value, available only for 'integer' types
              }
            ]
          },
          {
            name: 'Extra',
            open: false,
            buildProps: ['background-color', 'box-shadow', 'custom-prop'],
            properties: [
              {
                id: 'custom-prop',
                name: 'Custom Label',
                property: 'font-size',
                type: 'select',
                defaults: '32px',
                // List of options, available only for 'select' and 'radio'  types
                options: [
                  { value: '12px', name: 'Tiny' },
                  { value: '18px', name: 'Medium' },
                  { value: '32px', name: 'Big' }
                ]
              }
            ]
          }
        ]
      },
      storageManager: {
        id: 'gjs-', // Prefix identifier that will be used inside storing and loading
        type: 'local', // Type of the storage
        autosave: true, // Store data automatically
        autoload: true, // Autoload stored data on init
        stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
        storeComponents: true, // Enable/Disable storing of components in JSON format
        storeStyles: true, // Enable/Disable storing of rules in JSON format
        storeHtml: true, // Enable/Disable storing of components as HTML string
        storeCss: true // Enable/Disable storing of rules as CSS string
      },
      commands: {
        defaults: [
          // ...
          {
            id: 'store-data',
            run (editor) {
              editor.store()
            }
          }
        ]
      }
    })

    editor.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top'
    })

    editor.Panels.addPanel({
      id: 'basic-actions',
      el: '.panel__basic-actions',
      buttons: [
        {
          id: 'visibility',
          active: true, // active by default
          className: 'btn-toggle-borders',
          label: '<u>B</u>',
          command: 'sw-visibility' // Built-in command
        },
        {
          id: 'export',
          className: 'btn-open-export',
          label: 'Exp',
          command: 'export-template',
          context: 'export-template' // For grouping context of buttons from the same panel
        },
        {
          id: 'show-json',
          className: 'btn-show-json',
          label: 'JSON',
          context: 'show-json',
          command (editor) {
            editor.Modal.setTitle('Components JSON')
              .setContent(
                `<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`
              )
              .open()
          }
        }
      ]
    })

    // Define commands
    editor.Commands.add('show-layers', {
      getRowEl (editor) {
        return editor.getContainer().closest('.editor-row')
      },
      getLayersEl (row) {
        return row.querySelector('.layers-container')
      },

      run (editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor))
        lmEl.style.display = ''
      },
      stop (editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor))
        lmEl.style.display = 'none'
      }
    })

    editor.Commands.add('show-styles', {
      getRowEl (editor) {
        return editor.getContainer().closest('.editor-row')
      },
      getStyleEl (row) {
        return row.querySelector('.styles-container')
      },

      run (editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor))
        smEl.style.display = ''
      },
      stop (editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor))
        smEl.style.display = 'none'
      }
    })

    editor.Commands.add('show-traits', {
      getTraitsEl (editor) {
        const row = editor.getContainer().closest('.editor-row')
        return row.querySelector('.traits-container')
      },
      run (editor, sender) {
        this.getTraitsEl(editor).style.display = ''
      },
      stop (editor, sender) {
        this.getTraitsEl(editor).style.display = 'none'
      }
    })

    editor.Commands.add('set-device-desktop', {
      run: editor => editor.setDevice('Desktop')
    })
    editor.Commands.add('set-device-mobile', {
      run: editor => editor.setDevice('Mobile')
    })

    // Set initial device as Mobile
    editor.setDevice('Desktop')

    setEditor(editor)
  }, [])

  return (
    <div className='App'>
      <div class='panel__top'>
        <div class='panel__basic-actions'></div>
        <div class='panel__devices'></div>
        <div class='panel__switcher'></div>
      </div>
      <div class='editor-row'>
        <div class='editor-canvas'>
          <div id='gjs'>...</div>
        </div>
        <div class='panel__right'>
          <div class='layers-container'></div>
          <div class='styles-container'></div>
          <div class='traits-container'></div>
        </div>
      </div>
      <div id='blocks'></div>
    </div>
  )
}

export default App
