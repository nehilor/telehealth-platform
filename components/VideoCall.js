import { useEffect, useRef, useState } from 'react'

    export default function VideoCall({ roomId }) {
      const localVideoRef = useRef()
      const remoteVideoRef = useRef()
      const [connectionStatus, setConnectionStatus] = useState('connecting')
      const [error, setError] = useState(null)

      useEffect(() => {
        const peerConnection = new RTCPeerConnection({
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' }
          ]
        })

        const setupLocalStream = async () => {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              video: true,
              audio: true
            })
            localVideoRef.current.srcObject = stream
            stream.getTracks().forEach(track => {
              peerConnection.addTrack(track, stream)
            })
          } catch (err) {
            setError('Failed to access media devices')
            console.error(err)
          }
        }

        const setupRemoteStream = () => {
          peerConnection.ontrack = (event) => {
            remoteVideoRef.current.srcObject = event.streams[0]
            setConnectionStatus('connected')
          }
        }

        const handleSignaling = async () => {
          // Implement signaling server communication
          // This would typically involve WebSocket communication
          // with a signaling server to exchange SDP and ICE candidates
        }

        setupLocalStream()
        setupRemoteStream()
        handleSignaling()

        return () => {
          peerConnection.close()
        }
      }, [roomId])

      return (
        <div className="video-call-container">
          {error && <div className="error">{error}</div>}
          <div className="video-grid">
            <video 
              ref={localVideoRef} 
              autoPlay 
              muted 
              className="local-video"
            />
            <video 
              ref={remoteVideoRef} 
              autoPlay 
              className="remote-video"
            />
          </div>
          <div className="status">
            Status: {connectionStatus}
          </div>
        </div>
      )
    }
