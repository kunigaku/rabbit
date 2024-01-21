import ja from '@/locales/ja';
import stripMargin from '@/utils/stripMargin';

export default {
  general: {
    loading: 'Loading',
    updating: 'Updating',
  },
  posting: {
    placeholder: "What's happening?",
    placeholderReply: 'Post a reply',
    contentWarning: 'Content warning',
    contentWarningReason: 'Reason of warning',
    uploadImage: 'Upload image',
    submit: 'Submit',
    forbiddenToIncludeNsec: 'You cannot include private key (nsec).',
    failedToUploadFile: 'Failed to upload files: {{filenames}}',
    replyToPre: 'Reply to',
    replyToAnd: ' and ',
    replyToPost: '',
  },
  column: {
    home: 'Home',
    notification: 'Notification',
    relay: 'Relay',
    japanese: 'Japanese',
    posts: 'User',
    reactions: 'Reactions',
    channel: 'Channel',
    bookmark: 'Bookmark',
    search: 'Search',
    myPosts: 'My posts',
    myReactions: 'My reactions',
    back: 'Back',
    loadLatest: 'Load latest posts',
    loadOld: 'Load old posts',
    config: {
      columnWidth: 'Column width',
      widest: 'Widest',
      wide: 'Wide',
      medium: 'Medium',
      narrow: 'Narrow',
      moveLeft: 'Move left',
      moveRight: 'Move right',
      removeColumn: 'Remove',
    },
  },
  profile: {
    following: 'Following',
    followers: 'Followers',
    loadFollowers: 'Load',
    editProfile: 'Edit',
    follow: 'Follow',
    unfollow: 'Unfollow',
    followingCurrently: 'Following',
    followsYou: 'follows you',
    copyPubkey: 'Copy ID',
    mute: 'Mute',
    unmute: 'Unmute',
    followMyself: 'Follow myself',
    unfollowMyself: 'Unfollow myself',
    addUserColumn: 'Add user column',
    addUserHomeColumn: 'Add home column',
    confirmUnfollow: 'Do you really want to unfollow?',
    confirmUpdateEvenIfEmpty: stripMargin`
      Your follow list appears to be empty.

      There is no problem if you are trying to follow for the first time.
      Otherwise, it may be caused by poor connections to relays.
      You should reload this page to reconnect to relays.
      You also should make sure you have configured the same relay list as the other clients.

      Do you want to continue?
    `,
    failedToUpdateFollowList: 'Failed to update the follow list',
    failedToFetchLatestFollowList:
      'Failed to fetch the latest follow list. It may be disconnected from some relays.',
    edit: {
      icon: 'Icon',
      banner: 'Banner image',
      name: 'Username',
      displayName: 'Display Name',
      about: 'About',
      website: 'Website',
      nip05: 'Domain verification (NIP-05)',
      lightningAddress: 'LNURL address / lightning address',
      lightningAddressDescription: 'Only one side will be saved.',
      otherProperties: 'Other properties',
      save: 'Save',
      cancel: 'Cancel',
      updating: 'updating...',
      updateSucceeded: 'Updated successfully',
      failedToUpdatePartially: 'Failed to update on {{count}} relays',
      failedToUpdate: 'Failed to update on all relays',
    },
  },
  post: {
    replyToPre: 'Replying to ',
    replyToPost: '',
    copyEventId: 'Copy ID',
    showJSON: 'Show JSON',
    showReposts: 'Show reposts',
    showReactions: 'Show reactions',
    deletePost: 'Delete',
    confirmDelete: 'Do you really want to delete?',
    deletedSuccessfully: 'Deleted successfully (reload to reflect)',
    failedToDeletePartially: 'Failed to delete on {{count}} relays',
    failedToDelete: 'Failed to delete',
    showImage: 'Show image',
    showVideo: 'Show video',
    showPreview: 'Show preview',
    showOverflow: 'Read more',
    hideOverflow: 'Hide',
    download: 'Download',
    contentWarning: {
      show: 'Click to display',
      reason: 'Reason',
    },
    failedToFetchEvent: 'Failed to fetch event',
  },
  notification: {
    reposted: ' reposted',
    reacted: ' reacted',
    zapped: ' zapped',
  },
  zap: {
    lud06: 'LNURL address',
    lud16: 'Lightning Address',
    fetchingLnUrlEndpoint: 'Fetching LNURL endpoint...',
    fetchingLnUrlEndpointError: 'Failed to fetch LNURL endpoint.',
    lnUrlEndpointError: 'LNURL returned an error: ',
    fetchingLnUrlInvoice: 'Fetching Lightning invoice...',
    fetchingLnUrlInvoiceError: 'Failed to fetch Lightning invoice.',
    userDidNotConfigureZap: "You cannot Zap because the user did't configure Zap.",
    lnurlServiceDoesNotAllowNostr:
      "The LNURL service doesn't support Zap. This will be normal lightning payment.",
    zapSplitIsNotSupported: "Zap split is not supported yet. You'll zap to the author only.",
    comment: 'Comment (optional)',
    sendViaWallet: 'Send via wallet',
    sendViaWebLN: 'Send via extension',
    completed: 'Completed',
  },
  config: {
    config: 'Settings',
    confirmImport: 'Import? (The config will be overwritten)',
    copyToClipboard: 'Copy to clipboard',
    importFromClipboard: 'Import from clipboard',
    profile: {
      profile: 'Profile',
      openProfile: 'Open',
      editProfile: 'Edit',
    },
    relays: {
      relays: 'Relays',
      numOfRelays_one: '{{count}} relay are configured.',
      numOfRelays_other: '{{count}} relyas are configured.',
      addRelay: 'Add',
      importRelays: 'Import',
      importFromExtension: 'Import from browser extension',
      notConfigured: 'No relays are configured.',
      askImport: 'Do you want to import these relays?',
      failedToImport: 'Failed to import.',
      imported_one: 'Imported {{count}} relay.',
      imported_other: 'Imported {{count}} relays',
    },
    display: {
      display: 'Display',
      colorTheme: 'Color theme',
      timeNotation: 'Time notation',
      relativeTimeNotation: 'Relative',
      relativeTimeNotationExample: '7s',
      absoluteTimeNotationShort: 'Absolute (short)',
      absoluteTimeNotationShortExample: 'Yesterday 23:55',
      absoluteTimeNotationLong: 'Absolute (long)',
      absoluteTimeNotationLongExample: '2020/11/8 21:02:53',
      reaction: 'Reaction',
      enableEmojiReaction: 'Enable emoji reaction',
      showEmojiReaction: 'Show emoji reactions on posts',
      embedding: 'Embedded contents',
      embeddingDescription: 'Enable/disable embedding',
      others: 'Others',
      keepOpenPostForm: 'Remain the input field open after posting',
      showMediaByDefault: 'Load media by default',
      hideNumbers: 'Hide the numbers of reactions, reposts and followers',
    },
    customEmoji: {
      customEmoji: 'Custom emojis',
      shortcode: 'Name',
      url: 'URL',
      addEmoji: 'Add',
      removeEmoji: 'Remove',
      emojiImport: 'Emoji import',
      emojiImportDescription: 'Paste a JSON where the keys are names and the values are image URLs',
      importEmoji: 'Import',
    },
    mute: {
      mute: 'Mute',
      mutedUsers: 'Muted users',
      mutedKeywords: 'Muted keywords',
      add: 'Add',
    },
  },
  hello: {
    signerChecking: 'Checking that signer extension is installed...',
    signerUnavailable: 'Please install a signer extension.',
    loginWithSigner: 'Login with signer extension',
    signerUnavailableMessage: 'You need to install a signer browser extension.',
    reloadAfterInstall: 'Please reload after the installation is complete.',
    reload: 'Reload',
  },
  domainTransfer: {
    announcementHead: 'Rabbit has moved to the new domain',
    announcementDescription: 'Please update your bookmark and links',
    howToMigrateSettings: 'How to migrate settings',
    close: 'Close',
  },
} satisfies typeof ja;
