function! NextFile()
  let l:current_file = expand('%:t')
  let l:next_file = substitute(l:current_file, "\\d\\+", "\\=str2nr(submatch(0))+1", "")
  if filereadable(l:next_file)
    execute 'e ' . l:next_file
  endif
endfunction

function! PrevFile()
  let l:current_file = expand('%:t')
  let l:prev_file =  substitute(l:current_file, "\\d\\+", "\\=str2nr(submatch(0))-1", "")
  if filereadable(l:prev_file)
    execute 'e ' . l:prev_file
  endif
endfunction

nnoremap <leader>r :w\|!clear;echo;babel-node %<cr>
nmap r <leader>r

nnoremap <silent> <right> :call NextFile()<cr>
nnoremap <silent> <left> :call PrevFile()<cr>
nnoremap <silent> <down> <c-e>
nnoremap <silent> <up> <c-y>
nnoremap c :TComment<cr>
vnoremap c :'<,'>TComment<cr>
