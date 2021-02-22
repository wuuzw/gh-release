<template>
  <div class="py-3">
    <div class="d-flex flex-items-start">
      <h3 class="flex-auto text-normal">
        <a :href="release['html_url']">{{ release['name'] }} </a>
      </h3>

      <span
        v-if="release['prerelease']"
        class="flex-shrink-0 ml-2 Label Label--outline"
      >
        Pre-release
      </span>
      <span
        v-if="release['draft']"
        class="flex-shrink-0 ml-2 Label Label--outline"
      >
        Draft
      </span>
    </div>

    <details
      v-if="release['body'] !==''"
      class="mt-2"
    >
      <summary class="text-bold">
        Change Log
      </summary>
      <div class="markdown-body">
        <div v-html="renderMarkdown()" />
      </div>
    </details>

    <div class="mt-3">
      <div class="d-flex flex-justify-between">
        <div>
          <span class="text-bold">Assets</span>
          <span class="Counter ml-1">{{ release['assets'].length }}</span>
        </div>
        <span class="Counter bg-green text-white mr-2">
          <Octicon
            icon="download"
            size="16"
          />
          {{ totalDownload() }}</span>
      </div>

      <div class="Box mt-3">
        <div
          v-for="asset in release['assets']"
          :key="asset['id']"
          class="d-flex flex-wrap flex-justify-between flex-items-center py-1 Box-body px-2"
        >
          <a
            :href="asset['browser_download_url']"
            class="d-flex flex-items-center"
          >
            <Octicon
              class="text-gray"
              icon="package"
              size="16"
            />
            <span class="pl-2 flex-1 break-word text-bold">{{ asset['name'] }}</span>
          </a>
          <div>
            <span class="Counter ml-2">
              {{
                parseSize(asset['size'])
              }}
            </span>
            <span class="Counter bg-green text-white ml-2">
              <Octicon
                icon="download"
                size="16"
              />
              {{ asset['download_count'] }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Octicon from '@/components/Octicon';
import MarkdownIt from 'markdown-it';
import prettyBytes from 'pretty-bytes';

export default {
  name: 'Release',
  components: {Octicon},
  props: {
    release: {
      type: Object,
      required: true
    }
  },
  methods: {
    renderMarkdown() {
      let md = new MarkdownIt();
      return md.render(this.release['body']);
    },
    totalDownload() {
      return this.release['assets'].reduce(function(total, asset) {
        return total + asset['download_count'];
      }, 0);
    },
    parseSize(size) {
      return prettyBytes(size);
    }
  }
};
</script>
